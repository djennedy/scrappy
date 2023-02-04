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

    static stringToTerm(string){
        string = string.toLowerCase();
        switch(string) {
            case "spring":
                return this.Spring;
            case "summer":
                return this.Summer;
            case "fall":
                return this.Fall;
        }
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

    static getPrevTerm = (term) => {
        switch (term) {
            case this.Spring:
                return this.Fall;
            case this.Summer:
                return this.Spring;
            case this.Fall:
                return this.Summer;
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

const STARTING_TERM = Terms.Summer;
const STARTING_YEAR = 2014;

export {Terms, STARTING_TERM, STARTING_YEAR};