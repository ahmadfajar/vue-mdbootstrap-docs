export default {
    data() {
        return {
            active: true,
            chipDefaultActive: false,
            defaultPrimaryActive: false,
            defaultSuccessActive: false,
            defaultDangerActive: false,
            labelDefaultActive: false,
            labelPrimaryActive: false,
            labelSuccessActive: false,
            labelDangerActive: false,
            outlineDefaultActive: false,
            outlinePrimaryActive: false,
            outlineSuccessActive: false,
            outlineDangerActive: false,
            mixedDefaultActive: false,
            mixedPrimaryActive: false,
            mixedSuccessActive: false,
            mixedDangerActive: false,
            showDismissibleChip: true,
        }
    },
    methods: {
        chipDefaultClick() {
            this.chipDefaultActive = !this.chipDefaultActive;
        },
        chipDefPrimaryClick() {
            this.defaultPrimaryActive = !this.defaultPrimaryActive;
        },
        chipDefSuccessClick() {
            this.defaultSuccessActive = !this.defaultSuccessActive;
        },
        chipDefDangerClick() {
            this.defaultDangerActive = !this.defaultDangerActive;
        },
        labelDefaultClick() {
            this.labelDefaultActive = !this.labelDefaultActive;
        },
        labelPrimaryClick() {
            this.labelPrimaryActive = !this.labelPrimaryActive;
        },
        labelSuccessClick() {
            this.labelSuccessActive = !this.labelSuccessActive;
        },
        labelDangerClick() {
            this.labelDangerActive = !this.labelDangerActive;
        },
        outlineDefaultClick() {
            this.outlineDefaultActive = !this.outlineDefaultActive;
        },
        outlinePrimaryClick() {
            this.outlinePrimaryActive = !this.outlinePrimaryActive;
        },
        outlineSuccessClick() {
            this.outlineSuccessActive = !this.outlineSuccessActive;
        },
        outlineDangerClick() {
            this.outlineDangerActive = !this.outlineDangerActive;
        },
        mixedDefaultClick() {
            this.mixedDefaultActive = !this.mixedDefaultActive;
        },
        mixedPrimaryClick() {
            this.mixedPrimaryActive = !this.mixedPrimaryActive;
        },
        mixedSuccessClick() {
            this.mixedSuccessActive = !this.mixedSuccessActive;
        },
        mixedDangerClick() {
            this.mixedDangerActive = !this.mixedDangerActive;
        },
        toggleChip() {
            this.showDismissibleChip = !this.showDismissibleChip;
        },
    }
}
