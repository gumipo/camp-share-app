import { FirebaseTimestamp, db } from "../../Firebase/index";
import { fetchLocationsAction } from "../Location/actions";

const locationsRef = db.collection("locations");

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

//firestoreからProducts情報を取得してactionsに投げる
export const fetchLocations = () => {
  return async (dispatch) => {
    locationsRef
      .orderBy("updated_at", "desc")
      .get()
      .then((snapshots) => {
        const locationList = [];
        snapshots.forEach((snapshot) => {
          const location = snapshot.data();
          locationList.push(location);
        });
        dispatch(fetchLocationsAction(locationList));
      });
  };
};