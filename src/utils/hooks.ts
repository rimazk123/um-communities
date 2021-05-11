import { useState, useEffect } from "react";
import db from "./firebaseSetup";
import { labelTypes, platformTypes } from "./constants";
import { Community, Filters } from "./types";

const objectUnion = (arr1: Community[], arr2: Community[]) => {
  const names = arr1.map((community) => community.name);
  return arr1.concat(arr2.filter((community) => !names.includes(community.name)));
};

const useCommunities = (filters: Filters) => {
  const noFiltersSelected = () => !filters.platforms.length && !filters.categories.length;

  const [communities, setCommunities] = useState<Community[] | null>(null);

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
      const platformDocs = queriedPlatforms
        ? queriedPlatforms.docs.map((doc) => doc.data() as Community)
        : [];
      const categoryDocs = queriedCategories
        ? queriedCategories.docs.map((doc) => doc.data() as Community)
        : [];
      setCommunities(objectUnion(platformDocs, categoryDocs));
    };
    fetch();
    // eslint-disable-next-line
  }, [filters]);

  return communities;
};

export { useCommunities };
