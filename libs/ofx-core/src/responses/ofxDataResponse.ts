import { OfXValueResponse } from './ofxValueResponse';

export class OfXDataResponse {
  id: string;
  ofXValues: OfXValueResponse[];
  constructor(id: string, ofxValues: OfXValueResponse[]) {
    this.id = id;
    this.ofXValues = ofxValues;
    return this;
  }
}
