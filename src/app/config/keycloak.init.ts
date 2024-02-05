import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'SearchWithEase',
                clientId: 'web_client'
            },
            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            }
        });
}