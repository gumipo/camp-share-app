import React, { useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from "@material-ui/core";
import { storage } from "../../Firebase/index";
import ImagePreview from "../LocaTion/ImagePreview";

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
});

const ProfileImageArea = (props) => {
  const classes = useStyles();

  //画像の削除
  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm("この画像を削除しますか");
      if (!ret) {
        return false;
      } else {
        const newimage = props.image.filter((image) => image.id !== id);
        props.setImage(newimage);
        return storage.ref("images").child(id).delete();
      }
    },
    [props.image]
  );

  //画像のアップロード
  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });

      //ramdomな16の文字列を生成しidにする
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      const uploadRef = storage.ref("image").child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        //アップロードできたら
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          props.setImage((prevState) => [...prevState, newImage]);
        });
      });
    },
    [props.setImage]
  );

  return (
    <div>
      <div className="p-grid__list-image">
        {props.image.length > 0 &&
          props.image.map((image) => (
            <ImagePreview
              id={image.id}
              path={image.path}
              key={image.id}
              delete={deleteImage}
            />
          ))}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton className={classes.icon}>
          <label>
            <AddPhotoAlternateIcon />
            <input
              className="u-display-none"
              type="file"
              id="image"
              onChange={(event) => uploadImage(event)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};
export default ProfileImageArea;
