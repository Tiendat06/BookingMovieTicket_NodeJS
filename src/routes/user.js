const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const userMiddleWare = require('../app/middleware/UserMiddleWare');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/public/img')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({storage: storage}).single('img');

// [GET] /user
router.get("/", userMiddleWare.index);

// [GET] /user/profile
router.get('/profile', userMiddleWare.profile);

// [POST, AJAX] /user/add
router.post("/add", userMiddleWare.add_user);

// [GET] /user/user_verify
router.get("/user_verify", userController.user_verify);

// [PUT, AJAX] /user/edit
router.put("/edit", userMiddleWare.edit_user);

// [DELETE, AJAX] /user/delete
router.delete("/delete", userMiddleWare.delete_user);

// [POST] /user/profile/edit
router.post('/profile/edit', upload, userMiddleWare.edit_profile);

// [GET] /user/profile/info
router.get('/profile/info', userMiddleWare.user_info);

// [GET] /user/:page
router.get("/:page", userMiddleWare.index);

module.exports = router;