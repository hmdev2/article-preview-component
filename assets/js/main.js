function addShareBox() {
    const shareBox = document.querySelector('#shareBox');
    const btnShare = document.querySelectorAll('.btnShare');

    document.addEventListener('click', (e) => {
        let el = e.target;
        if (Array.from(btnShare).includes(el)) {

            shareBox.classList.remove('hidden');
        } else {
            if (!shareBox.classList.contains('hidden')) shareBox.classList.add('hidden');
            
        }
    });
}

addShareBox();