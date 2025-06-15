import PostModel from '../models/Post.js';

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate({ path: "user", select: ["name", "avatar"] });

        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить статьи',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        
        const updatedPost = await PostModel.findOneAndUpdate(
            { _id: postId },
            { $inc: { viewsCount: 1 } },
            { new: true }  
        );

        if (!updatedPost) {
            return res.status(404).json({
                message: 'Статья не найдена',
            });
        }

        res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось вернуть статью',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        
        const deletedPost = await PostModel.findByIdAndDelete(postId); 

        if (!deletedPost) {
            return res.status(404).json({
                message: 'Статья не найдена'
            });
        }

        res.json({
            success: true,
            message: 'Статья успешно удалена',
            deletedPostId: postId 
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось удалить статью',
            error: err.message 
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        });

        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать статью',
        });
    }
};

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
            {
            _id: postId,
        }, 
        {
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        },
        );

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить статью',
        });
    }
};