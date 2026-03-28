import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initEurusCountdowns();
        this.initEurusBeforeAfter();
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }

    initEurusCountdowns() {
        document.querySelectorAll('[data-eurus-countdown]').forEach(el => {
            const end = new Date(el.dataset.eurusCountdown).getTime();
            if (isNaN(end)) return;

            const digits = {
                days:  el.querySelector('[data-unit="days"]'),
                hours: el.querySelector('[data-unit="hours"]'),
                mins:  el.querySelector('[data-unit="mins"]'),
                secs:  el.querySelector('[data-unit="secs"]'),
            };

            const tick = () => {
                const diff = Math.max(0, end - Date.now());
                const s = Math.floor(diff / 1000);
                digits.days.textContent  = String(Math.floor(s / 86400)).padStart(2, '0');
                digits.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, '0');
                digits.mins.textContent  = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
                digits.secs.textContent  = String(s % 60).padStart(2, '0');
                if (diff <= 0) clearInterval(timer);
            };

            tick();
            const timer = setInterval(tick, 1000);
        });
    }

    initEurusBeforeAfter() {
        document.querySelectorAll('.eurus-ba-range').forEach(range => {
            const card = range.closest('.eurus-ba-card');
            if (!card) return;
            const before = card.querySelector('.eurus-ba-before');
            const divider = card.querySelector('.eurus-ba-divider');

            const update = (val) => {
                before.style.width = val + '%';
                divider.style.left = val + '%';
            };

            range.addEventListener('input', (e) => update(e.target.value));
            update(range.value);
        });
    }
}

Home.initiateWhenReady(['index']);