import {MobxElement, View} from "Frontend/views/view";
import {customElement, query, state} from "lit/decorators.js";
import {html} from "lit";
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-number-field';
import '@vaadin/vaadin-grid/vaadin-grid';
import QrScanner from 'qr-scanner';
// @ts-ignore
import QrScannerworkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js'

@customElement('qrread-view')
export class QrreadView extends View {
    @query('#video-source')
    videoElement!: HTMLVideoElement;
    @state() qrResult='';
    @state() running=false;
    qrScanner?: QrScanner;

    firstUpdated(){
        QrScanner.WORKER_PATH = QrScannerworkerPath;
        this.qrScanner=new QrScanner(this.videoElement,result => this.qrResult=result)
    }
    toggleScanner(){
        this.running=!this.running;
        if(this.qrScanner){
            if(this.running){
                this.qrScanner.start();
            }
                else{
                    this.qrScanner.stop();
                }
            }
    }

    render() {
        return html`
      <div class="p-m flex flex-col gap-m items-center" style="padding: 25px">
        <div>
         <video id="video source" class="rounded-s shadow-m"></video>
          <vaadin-button theme="primary" @click="${this.toggleScanner()}" 
          thema=${this.running ? 'error' : 'primary'}>
          ${this.running ? 'Stop' : 'Start'}</vaadin-button> 
            <pre> ${this.qrResult}</pre>
        </div>
    `;
    }

}