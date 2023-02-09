class Terms {
    static Spring = new Terms('spring');
    static Summer = new Terms('summer');
    static Fall = new Terms('fall');

    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    static getTermFromMonth = (month) => {
        if (month <= 4) {
            return this.Spring; // Jan - Apr
        } else if (month > 4 && month <= 8) {
            return this.Summer // May - Aug
        } else if (month > 8 && month <= 12) {
            return this.Fall // Sept - Dec
        }
    }

    static getNextTerm = (term) => {
        switch (term) {
            case this.Spring:
                return this.Summer;
            case this.Summer:
                return this.Fall;
            case this.Fall:
                return this.Spring
            default:
                break;
        }
    }

    static getCurrentTerm = () => {
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth;

        return Terms.getTermFromMonth(currentMonth)
    }
}

export {Terms};