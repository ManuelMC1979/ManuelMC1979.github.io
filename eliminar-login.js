// ✅ SCRIPT PARA ELIMINAR LOGIN - Acceso directo sin RUT ni nombre
// Ejecutar inmediatamente al cargar la página

(function() {
    'use strict';
    
    console.log('🔓 Iniciando eliminación de login...');
    
    // Función para eliminar login
    function eliminarLogin() {
        // 1. Eliminar modales de login
        const loginModals = document.querySelectorAll(
            '[id*="login"], [id*="Login"], [id*="auth"], [id*="Auth"], ' +
            '[class*="login"], [class*="Login"], [class*="auth"], [class*="Auth"]'
        );
        
        loginModals.forEach(modal => {
            if (modal) {
                modal.style.display = 'none';
                modal.remove();
                console.log('🗑️ Modal de login eliminado:', modal.id || modal.className);
            }
        });
        
        // 2. Eliminar overlays y fondos oscuros
        const overlays = document.querySelectorAll(
            '[id*="overlay"], [class*="overlay"], ' +
            '[id*="backdrop"], [class*="backdrop"], ' +
            '[id*="modal-bg"], [class*="modal-bg"]'
        );
        
        overlays.forEach(overlay => {
            if (overlay) {
                overlay.style.display = 'none';
                overlay.remove();
                console.log('🗑️ Overlay eliminado');
            }
        });
        
        // 3. Eliminar formularios de RUT y nombre
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input');
            let hasRutOrName = false;
            
            inputs.forEach(input => {
                const placeholder = (input.placeholder || '').toLowerCase();
                const name = (input.name || '').toLowerCase();
                const id = (input.id || '').toLowerCase();
                
                if (placeholder.includes('rut') || placeholder.includes('nombre') ||
                    name.includes('rut') || name.includes('nombre') ||
                    id.includes('rut') || id.includes('nombre')) {
                    hasRutOrName = true;
                }
            });
            
            if (hasRutOrName) {
                form.style.display = 'none';
                form.remove();
                console.log('🗑️ Formulario de login eliminado');
            }
        });
        
        // 4. Asegurar que el contenido principal esté visible
        const mainSelectors = [
            '.container-principal',
            'main',
            '#main',
            '#content',
            '#app',
            '.app',
            'body > div:first-child'
        ];
        
        mainSelectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.pointerEvents = 'auto';
                console.log('✅ Contenido principal visible:', selector);
            }
        });
        
        // 5. Habilitar scroll
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.documentElement.style.overflow = 'auto';
        
        // 6. Eliminar estilos inline que puedan ocultar contenido
        document.body.style.removeProperty('display');
        document.body.style.removeProperty('visibility');
        
        // 7. Limpiar localStorage de datos de login si existen
        const loginKeys = ['userRut', 'userName', 'isLoggedIn', 'loginData', 'authToken'];
        loginKeys.forEach(key => {
            if (localStorage.getItem(key)) {
                localStorage.removeItem(key);
                console.log('🗑️ Dato de login eliminado:', key);
            }
        });
        
        // 8. Marcar como "logueado" para evitar que se vuelva a mostrar
        localStorage.setItem('skipLogin', 'true');
        sessionStorage.setItem('skipLogin', 'true');
        
        console.log('✅ Login eliminado completamente - Acceso directo habilitado');
    }
    
    // Ejecutar inmediatamente
    eliminarLogin();
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', eliminarLogin);
    }
    
    // Ejecutar después de que todo esté cargado
    window.addEventListener('load', eliminarLogin);
    
    // Observar cambios en el DOM por si se intenta mostrar el login dinámicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        const id = (node.id || '').toLowerCase();
                        const className = (node.className || '').toString().toLowerCase();
                        
                        if (id.includes('login') || id.includes('auth') ||
                            className.includes('login') || className.includes('auth') ||
                            className.includes('modal')) {
                            node.style.display = 'none';
                            node.remove();
                            console.log('🗑️ Login dinámico bloqueado');
                        }
                    }
                });
            }
        });
    });
    
    // Iniciar observador
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    console.log('👁️ Observador de login activado');
    
})();
