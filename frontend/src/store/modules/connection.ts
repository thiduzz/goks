// store/modules/user.ts
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Connection from '@/dto/connection'
@Module({ namespaced: true, name: 'connection' })
class ConnectionStore extends VuexModule {

    public registeredConnections: Array<Connection> = []

    @Mutation
    public prependConnection(connection: Connection): void {
        this.registeredConnections.unshift(connection)
    }

    @Action
    public addConnection(newConnection: Connection): void {
        // eslint-disable-next-line no-debugger
        debugger;
        this.context.commit('prependConnection', newConnection)
    }

    get connections() {
        return this.registeredConnections
    }

}
export default ConnectionStore