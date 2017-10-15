class Enum {

    constructor(types, translations) {
        this.enum = [];
        this.types = [];

        for (var element in types) {
            this.enum.push({
                element: element,
                value: types[element],
                translation: translations[element]
            });
            this.types.push(types[element]);
        }
    }

    getTypes() {
        return this.types;
    }

    getValue(translation) {
        for (var key in this.enum) {
            var element = this.enum[key];
            if (element.translation == translation) {
                return element.value;
            }
        }
        return null;
    }

    getTranslation(value) {
        for (var key in this.enum) {
            var element = this.enum[key];
            if (element.value == value) {
                return element.translation;
            }
        }
        return null;
    }
}

module.exports = Enum;