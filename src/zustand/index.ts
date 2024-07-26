import { create } from "zustand";

interface InitialState {
  status: string;
  dataList: Array<{ [key: string]: any }>;
  data: {
    [key: string]: any;
  };
  message: string;
}

type State = {
  state: InitialState;
};

const initialState: InitialState = {
  status: "pending",
  dataList: [],
  data: {},
  message: "",
};

const useStore = create<State>((set) => ({
  state: initialState,
}));

export default useStore;
