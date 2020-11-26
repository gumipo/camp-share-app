import { FirebaseTimestamp, db } from "../../Firebase/index";
import { fetchLocationsAction } from "../Location/actions";

const locationsRef = db.collection("locations");

export const fetchLocations = (prefecture) => {
  return async (dispatch) => {
    let query = locationsRef.orderBy("updated_at", "desc");
    query =
      prefecture !== "all"
        ? query.where("prefecture", "==", prefecture)
        : query;
    query.get().then((snapshots) => {
      const locationsList = [];
      snapshots.forEach((snapshot) => {
        const location = snapshot.data();
        locationsList.push(location);
      });
      dispatch(fetchLocationsAction(locationsList));
    });
  };
};

export const fetchFavoriteLocations = () => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
    const favoriteRef = db.collection("users").doc(uid).collection("favorite");
    favoriteRef.get().then((snapshots) => {
      const favoriteLocationsList = [];
      snapshots.forEach((snapshot) => {
        const location = snapshot.data();
        favoriteLocationsList.push(location);
      });
      dispatch(fetchLocationsAction(favoriteLocationsList));
    });
  };
};

export const saveLocation = (
  images,
  name,
  Url,
  prefecture,
  evaluation,
  address
) => {
  return async () => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      images: images,
      name: name,
      Url: Url,
      prefecture: prefecture,
      evaluation: evaluation,
      address: address,
      updated_at: timestamp,
    };

    return locationsRef
      .doc()
      .set(data)
      .catch((error) => {
        throw new Error(error);
      });
  };
};
