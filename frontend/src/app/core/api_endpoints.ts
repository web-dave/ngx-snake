import { ApiRouteDefinition, HttpMethod } from '@auth0/auth0-angular';
import { environment as env } from '../../environments/environment';

export const API_ENDPOINTS: ApiRouteDefinition[] = [
    {
        httpMethod: HttpMethod.Put,
        uri: `${env.apiUrl}/api/v1/hall-of-fame`
    },
];
