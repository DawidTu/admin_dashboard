import SwitchButton from "../../components/SwitchButton";
import MyButton from "../../components/MyButton";

export const MyNotificationDataGeneral = [
    {
        mainTitle: "General",
        title: "Comments and replies",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        icon: <SwitchButton checked={true}/>,
    },
    {
        title: "Comments and replies",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        icon: <SwitchButton checked={true}/>,
    },
    {
        title: "Comments and replies",
        text: "Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.",
        icon: <SwitchButton />,
    },
]
export const MyNotificationDataShares = [
    {
        mainTitle: "Shares",
        title: "Shares of my content",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        button: <MyButton size="small" text="Manage"/>,
    },
    {
        title: "Team invites",
        text: "Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.",
        button: <MyButton size="small" text="Manage"/>,
    },
    {
        title: "Smart connection",
        text: "Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.",
        button: <MyButton size="small" customColor="danger" text="Disable"/>,
        smText: "Active"
    },
]