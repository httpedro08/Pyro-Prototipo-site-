(function(){
    const KEY = 'pyro-theme';
    const root = document.documentElement;
    const btnId = 'themeToggle';

    function applyTheme(theme){
        if(theme === 'light'){
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        updateButton(theme);
    }

    function updateButton(theme){
        const btn = document.getElementById(btnId);
        if(!btn) return;
        btn.textContent = theme === 'light' ? '☀️' : '🌙';
    }

    function toggle(){
        const current = localStorage.getItem(KEY) === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        localStorage.setItem(KEY, next === 'light' ? 'light' : 'dark');
        applyTheme(next === 'light' ? 'light' : 'dark');
    }

    document.addEventListener('DOMContentLoaded', function(){
        const saved = localStorage.getItem(KEY);
        applyTheme(saved === 'light' ? 'light' : 'dark');
        const btn = document.getElementById(btnId);
        if(btn) btn.addEventListener('click', toggle);
    });
})();
