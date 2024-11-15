class Item{
    constructor(title,desc)
        {
            this.title = title;
            this.desc = desc;
            this.done = false;
        }

    titleSet = (newTitle) =>
        {
            this.title = newTitle;
        }

    titleGet = () =>
        {
            return this.title;
        }
    descSet = (newDesc) =>
        {
            this.desc = desc;
        }
    descGet = () =>
        {
            return this.desc;
        }
}

export default item;