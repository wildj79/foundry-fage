export class FAGEItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 500,
            height: 500,
            classes: ["fage", "sheet", "item"],
            resizable: true
        });
    }

    get template() {
        const path = "systems/fage/templates/items";

        return `${path}/${this.item.data.type}.html`;
    }

    getData() {
        const data = super.getData();

        return data;
    }
}