import React, { Dispatch, SetStateAction } from "react";
type Dis = Dispatch<SetStateAction<boolean>>;

const ThemeContext = React.createContext<[boolean, Dis]>([false, (() => { }) as Dis]);
export default ThemeContext;