import MicroModal from "micromodal";
import YoutubePlayer from "youtube-player";
import AccessibilityUtilities from "../utilities/accessibility";

export class Modal {
  private element: HTMLElement;
  private modalId: string;
  private isVideo: boolean = false;
  private player: any;
  private triggers: NodeListOf<HTMLButtonElement>;
  private closers: NodeListOf<HTMLButtonElement>;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.modalId = this.element.id;
      this.isVideo = this.element.classList.contains("iastate22-modal--video");

      this.init();
    }
  }

  private init() {
    this.convertAnchorsToButtons();
    this.createVideoPlayer();
    this.handleModalEvents();
    this.moveModalToBottomOfBody();
  }

  private convertAnchorsToButtons() {
    const triggers = document.querySelectorAll(`a[data-micromodal-trigger="${this.modalId}"]`) as NodeListOf<
      HTMLAnchorElement
    >;
    const closers = this.element.querySelectorAll("a[data-micromodal-close]") as NodeListOf<HTMLAnchorElement>;
    const anchors = [...Array.from(triggers), ...Array.from(closers)] as HTMLAnchorElement[];

    for (let i = 0; i < anchors.length; i++) {
      AccessibilityUtilities.convertAnchorToButton(anchors[i]);
    }

    this.triggers = document.querySelectorAll(`[data-micromodal-trigger="${this.modalId}"]`);
    this.closers = this.element.querySelectorAll(`[data-micromodal-close]`);
  }

  private createVideoPlayer() {
    if (this.isVideo) {
      const playerRoot = this.element.querySelector(".iastate22-modal__media") as HTMLElement;
      this.player = new YoutubePlayer(playerRoot, {
        videoId: playerRoot.dataset.vid,
      });
    }
  }

  private handleModalEvents() {
    for (let i = 0; i < this.triggers.length; i++) {
      this.triggers[i].addEventListener("click", () => {
        MicroModal.show(this.modalId, {
          onShow: (modal) => {
            const event = new CustomEvent("micromodalshow", {
              detail: {
                modal,
              },
              bubbles: true,
              cancelable: true,
              composed: false,
            });

            window.dispatchEvent(event);

            if (this.isVideo) {
              console.log("test");
              this.player.playVideo();
            }
          },
          onClose: (modal) => {
            const trigger = document.querySelector(`[data-micromodal-trigger="${modal.id}"]`) as HTMLElement;
            const event = new CustomEvent("micromodalclose", {
              detail: {
                modal,
              },
              bubbles: true,
              cancelable: true,
              composed: false,
            });

            window.dispatchEvent(event);

            if (!!trigger) {
              setTimeout(() => {
                trigger.focus();
              }, 100);
            }
            if (this.isVideo) {
              this.player.pauseVideo();
            }
          },
        });
      });
    }

    for (let i = 0; i < this.closers.length; i++) {
      this.closers[i].addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        const isButton = target.tagName.toLowerCase() === "button";
        const isOverlay = target.classList.contains("iastate22-modal__overlay") && event.target === event.currentTarget;

        if (isButton || isOverlay) {
          MicroModal.close(this.modalId);
        }
      });
    }
  }

  private moveModalToBottomOfBody() {
    document.body.appendChild(this.element);
  }
}

export default function modalsInit() {
  const modals = document.querySelectorAll(".iastate22-modal") as NodeListOf<HTMLElement>;
  for (let i = 0; i < modals.length; i++) {
    new Modal(modals[i]);
  }
}
