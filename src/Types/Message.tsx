import moment from "moment";

type Message = {
    user?: string | null;
    time?: moment.Moment | null;
    text?: string | null;
    id?: string | null;
}

export default Message;