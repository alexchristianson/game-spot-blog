const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Genre = require('./Genre');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Genre.hasMany(Post, {
    foreignKey: 'genre_id'
});

Post.belongsTo(Genre, {
    foreignKey: 'genre_id'
});

module.exports = { User, Post, Comment, Genre };