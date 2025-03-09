import { create } from "zustand";

interface Profile {
  name: string;
  age: number;
  bio: string;
  image: string;
}

interface LikedProfilesStore {
  likedProfiles: Profile[];
  likeProfile: (profile: Profile) => void;
  clearLikes: () => void;
}

const useLikedProfilesStore = create<LikedProfilesStore>((set) => ({
  likedProfiles: [],
  likeProfile: (profile) =>
    set((state) => ({
      likedProfiles: [...state.likedProfiles, profile],
    })),
  clearLikes: () => set({ likedProfiles: [] }),
}));

export default useLikedProfilesStore;
