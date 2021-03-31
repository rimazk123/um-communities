import { useState, useEffect } from "react";
import db from "./firebaseSetup";

interface Filters {
  platform?: string;
  categories?: string[];
}

interface ICardDTO {
  community: string;
  platform: string;
  image: string;
}

const useCommunities = (filters: Filters) => {
  const [communities, setCommunities] = useState<ICardDTO[]>();
  useEffect(() => {
    const fetch = async () => {
      let query = await db.collection("approved-communties").get();
      let docs = query.docs.map((doc) => doc.data() as ICardDTO);
      setCommunities(docs);
    };
    fetch();
  }, [filters]);

  return communities;
};

export { useCommunities };
