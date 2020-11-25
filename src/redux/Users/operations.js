import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
//import firebase
import { auth, FirebaseTimestamp, db } from "../../Firebase/index";
import firebase from "firebase";

//認証をリッスン関数
export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                role: data.role,
                username: data.username,
              })
            );
          });
      } else {
        dispatch(push("/login"));
      }
    });
  };
};

//サインイン
export const signIn = (email, password) => {
  return async (dispatch) => {
    //validation
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                role: data.role,
                username: data.username,
              })
            );
            dispatch(push("/"));
          });
      }
    });
  };
};

//メールアドレスでのアカウント作成
export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    //validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致していません");
      return false;
    }

    //ユーザー作成
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          //ユーザーデータの作成
          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username,
          };

          //データベースに登録
          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};

//リセットパスワード
export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert(
            "入力されたアドレスにパスワードリセット用のメールを送信しました"
          );
          dispatch(push("/signin"));
        })
        .catch(() => {
          alert("パスワードリセットに失敗しました。通信状況をお確かめください");
        });
    }
  };
};

//サインアウト
export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/login"));
    });
  };
};

//Twitterでログイン
export const twitterLogin = () => {
  return async (dispatch) => {
    const provider = new firebase.auth.TwitterAuthProvider();
    provider.setCustomParameters({
      lang: "ja",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        const uid = user.uid;
        const email = user.email;
        const username = user.displayName;
        const image = user.photoURL;
        const timestamp = FirebaseTimestamp.now();

        const userData = {
          createed_at: timestamp,
          updated_at: timestamp,
          role: "customer",
          uid: uid,
          email: email,
          username: username,
          image: image,
        };

        //firebaseに登録
        db.collection("users")
          .doc(uid)
          .set(userData)
          .then(() => {
            dispatch(push("/"));
          })
          .catch(() => {
            alert("ログインに失敗しました");
          });
      });
  };
};

//googleでログイン
export const googleLogin = () => {
  return (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        const image = user.photoURL;
        const uid = user.uid;
        const email = user.email;
        const username = user.displayName;
        const timestamp = FirebaseTimestamp.now();

        const userData = {
          createed_at: timestamp,
          updated_at: timestamp,
          role: "customer",
          uid: uid,
          email: email,
          username: username,
          image: image,
        };

        db.collection("users")
          .doc(uid)
          .set(userData)
          .then(() => {
            dispatch(push("/"));
          })
          .catch(() => {
            alert("ログインに失敗しました。");
          });
      });
  };
};
