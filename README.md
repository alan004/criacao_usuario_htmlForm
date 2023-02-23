# criação de usuário com form HTML
Expandindo a ideia do repositório "criacao_de_usuarios", utilizei um form para cadastrar um usuário na memória do navegador. Aqui além de armazenar os dados em algum lugar, também separei as funções do JS em diferentes arquivos para a melhor organização do projeto.
Além disso uma outra melhoria foi na condicional que consulta nosso array, que agora verifica três possibilidades:
- Usuario e senha correto
- Usuario e senha errado (não localizado)
- Usuario correto e senha errada

No cadastro, ao preencher as informações, o usuário é direcionado para o Login, onde os dados que foram inseridos no LocalStorage são consultados. Caso o login seja TRUE, ocorre redirecionamento para a HOME.

Foi bem legal usuar o antigo projeto de base e evoluir um pouco mais aqui. Claro que não é seguro armazenar esse tipo de dados no LocalStorage porém funciona como um exercício de lógica e na criação de usuaários teste em futuros projetos.
