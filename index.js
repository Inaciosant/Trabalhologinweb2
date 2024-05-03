const ComponenteA = {
    template: `
        <div class="componente">
            <h1>Login</h1>
            <label for="username">Nome de usuário:</label><br>
        <input type="text" id="username" name="username" required><br>
        
        <label for="password">Senha:</label><br>
        <input type="password" id="password" name="password" required><br>
        </div>
    `
}

const ComponenteB = {
    template: `
        <div class="componente">
            <h1>Cadastro</h1>
            <label for="email">E-mail:</label><br>
        <input type="email" id="email" name="email" required><br>
        
        <label for="password">Senha:</label><br>
        <input type="password" id="password" name="password" required><br>
        </div>
    `
}

const {createApp} = Vue;

createApp({
    data() {
        return {
            componenteAtual: "ComponenteA"
        }
    },
    methods: {
        alterarComponentes() {
            this.componenteAtual = (this.componenteAtual === "ComponenteA") ? "ComponenteB" : "ComponenteA"
        }
    },
    components: {
        ComponenteA,
        ComponenteB
    }
}).mount("#app")