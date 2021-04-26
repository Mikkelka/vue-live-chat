import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

// så det kan bruges flere steder, med forskellige collections
const useCollection = (collection) => {
  const error = ref(null);

  //   doc (bare et navn) - bruges i Newchatform, hvor chat bliver sendt
  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
