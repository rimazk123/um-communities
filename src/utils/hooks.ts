import { useState, useEffect } from "react";
import db from "./firebaseSetup";
import { labelTypes, platformTypes } from "./constants";
import { Community, Filters } from "./types";

const useCommunities = (filters: Filters) => {
  const noFiltersSelected = () => {
    return !filters.platforms.length && !filters.categories.length;
  };

  const [communities, setCommunities] = useState<Community[]>();

  useEffect(() => {
    const fetch = async () => {
      const queryFilters: Filters = {
        platforms: noFiltersSelected() ? platformTypes : filters.platforms,
        categories: noFiltersSelected() ? labelTypes : filters.categories,
      };
      // Disgusting I know
      const queriedPlatforms = queryFilters.platforms.length
        ? await db
            .collection("approved-communties")
            .where("type", "in", queryFilters.platforms)
            .get()
        : null;
      const queriedCategories = queryFilters.categories.length
        ? await db
            .collection("approved-communties")
            .where("categories", "array-contains-any", queryFilters.categories)
            .get()
        : null;
      console.log(queriedCategories);
      const platformDocs = queriedPlatforms
        ? queriedPlatforms.docs.map((doc) => doc.data() as Community)
        : [];
      const categoryDocs = queriedCategories
        ? queriedCategories.docs.map((doc) => doc.data() as Community)
        : [];
      console.log(platformDocs, categoryDocs);
      const union = [...new Set([...platformDocs, ...categoryDocs])];
      console.log(union);
      setCommunities(union);
    };
    fetch();
  }, [filters]);

  return communities;
};

export { useCommunities };
