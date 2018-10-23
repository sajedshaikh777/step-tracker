import { PanelStateConstant } from '../../utils/utils.constants';

export class DataServicesFactory {
    private static journeyStep: any = null;

    static getJourneyStep() {
        if (this.journeyStep == null) {
            this.journeyStep = PanelStateConstant.txCreate;
        }
        return this.journeyStep;
    }

    static setJourneyStep(step: any) {
        this.journeyStep = step;
    }

}
