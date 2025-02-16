let gMobileMenuIsOpen = false;
let gContainerMobileMenuXclose = null;

const mobileMenuClickAway = document.getElementById('header-mobile-main-nav');
mobileMenuClickAway.onclick = closeMobileMenuIfOpened;
function closeMobileMenuIfOpened() {
	if (gMobileMenuIsOpen === true) {
		mobileMenuOpenClose();
	}
}

const containerMobileMenuBars = document.getElementById('header-menu');
containerMobileMenuBars.onclick = mobileMenuOpenClose;
function mobileMenuOpenClose() {
	gMobileMenuIsOpen = !gMobileMenuIsOpen;
	let containerMobileMenu = document.getElementById('header-mobile-main-nav');
	if (gMobileMenuIsOpen === true) {
		document.body.style = 'overflow: hidden;';
		containerMobileMenuBars.style = 'visibility: hidden;';
		containerMobileMenu.style = 'display: flex;';
		gContainerMobileMenuXclose = document.getElementById('close-menu-xmark');
		gContainerMobileMenuXclose.onclick = mobileMenuOpenClose;
	} else {
		document.body.style = 'overflow: visible;';
		containerMobileMenuBars.style = 'visibility: visible;';
		containerMobileMenu.style = 'display: none;';
	}
}

