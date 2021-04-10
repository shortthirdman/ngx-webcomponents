import { Pipe, PipeTransform } from '@angular/core';
import Autolinker from 'autolinker';

@Pipe({
  name: 'anchorLink'
})
export class AnchorLinkPipe implements PipeTransform {

  private defaultConfig: any = {
    newWindow: true,
    urls: {
      schemeMatches: true,
      wwwMatches: true,
      tldMatches: true
    },
    email: true,
    stripPrefix: true,
    stripTrailingSlash: true,
    decodePercentEncoding: true
  };
  
  private autolinker: Autolinker | any;
 
  transform(value: string, options?: any): any {
    if (options) {
      this.autolinker = new Autolinker(options);
    } else {
      this.autolinker = new Autolinker(this.defaultConfig);
    }
	return this.autolinker.link(value);
  }

}
