import './../sass/constructor.sass';

const $ = jQuery.noConflict();

const throttle = (type, name, obj) => {
	let running = false;
	const object = obj || window;
	const func = () => {
		if (running) {
			return;
		}
		running = true;
		requestAnimationFrame(() => {
			object.dispatchEvent(new CustomEvent(name));
			running = false;
		});
	};


	object.addEventListener(type, func);
};


function deviceType() {
	return window
		.getComputedStyle(document.querySelector('body'), '::before')
		.getPropertyValue('content').replace(/'/g, '').replace(/"/g, '');
}
function checkDeviceType(MQ, isMobile, isDesktop, arrCbs) {
	if (MQ === 'desktop' && isDesktop) {
		arrCbs[0]();
	} else if (MQ === 'mobile' && isMobile) {
		arrCbs[1]();
	}
}

function staticInit(mq, firstFunc, secFunc) {
	if (mq === 'desktop') {
		firstFunc();
	} else if (mq === 'mobile') {
		secFunc();
	}
}

(() => {
	const $window = $(window);
	const $body = $('body');
	const $html =  $('html');

	class App {
		init = () => {
			console.log('init');
		};

		handleLoad = () => {
			console.log('onload');
		};

		switchToMobile = () => {
			console.log('switched to mobile');
		};
		switchToDesktop = () => {
			console.log('switched to desktop');
		};

		handleResize = () => {
			console.log('resize');
		};

		destroy = () => {
			console.log('destroy');
		};

		handleScroll = () => {
			console.log('scroll');
		}
	}

	const ErmakApp = new App();
	const MQ = deviceType();
	let isMobile = true;
	let isDesktop = false;

	throttle('resize', 'optimizedResize');

	function switchDeviceType(mq) {
		if (mq === 'desktop' && isDesktop) {
			isDesktop = false;
			isMobile = true;
		} else if (mq === 'mobile' && isMobile) {
			isMobile = false;
			isDesktop = true;
		}
	}

	staticInit(MQ, ErmakApp.switchToDesktop, ErmakApp.switchToMobile);

	$window.on('optimizedResize', () => {
		const mq = deviceType();

		checkDeviceType(
			mq,
			isMobile,
			isDesktop,
			[ErmakApp.switchToDesktop, ErmakApp.switchToMobile]
		);
		

		switchDeviceType(mq);
	});

	$window
		.on('DOMContentLoaded', ErmakApp.init());
		// .on('scroll', () => ErmakApp.handleScroll())
		// .on('load', () => ErmakApp.handleLoad())
		// .on('resize', () => ErmakApp.handleResize());
})();
