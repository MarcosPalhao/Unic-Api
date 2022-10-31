# Cadastro de usuario

**RF**
Deve ser possível cadastrar um novo usuário

**RN**
Não deve ser possivel cadastrar um usuario com um email já existente.
O foto no cadastro do usuário não deve ser obrigatória.
O usuario responsavel pelo cadastro de usuarios deve ser um administrador.

# Cadastro de clientes

**RF**
Deve ser possivel cadastrar um novo cliente.

**RN**
Não deve ser possivel cadastrar um cliente com um email e documento já existente.
O usuário responsavel pelo cadastro de cliente deve ser um administrador.

# Cadastro de endereços

**RF**
Deve ser possível cadastrar um novo endereço.

**RN**
Não deve ser possivel cadastrar um endereço com o mesmo nome.
O endereço deve ser cadastrado como disponivel por padrão.

# Cadastro de outdoors

**RF**
Deve ser possivel cadastrar um novo outdoor

**RN**
Não deve ser possivel cadastrar um outdoor para um endereço não cadastrado.
Não deve ser possivel cadastrar um outdoor em um endereço indisponivel.
O outdoor deve ser cadastrado como disponivel por padrão.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Cadastro de outdoors alugados

**RF**
Deve ser possivel cadastrar um novo aluguel de outdoor.

**RN**
Não deve ser possivel cadastrar um novo aluguel de outdoor para um cliente não cadastrado.
Não deve ser possivel cadastrar um novo aluguel de outdoor para um outdoor não cadastrado.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Faturas de outdoors

**RF**
Deve ser possivel criar um novo registro de uma fatura de outdoor.

**RN**
Não deve ser possivel criar um novo registro para um cliente não cadastrado.
Não deve ser possivel criar um novo registro para um outdoor não cadastrado.
A fatura de outdoor deve ser criada como status de não pago por padrão.

# Faturas de endereços 

**RF**
Deve ser possivel criar um novo registro de uma fatura de um endereço.

**RN**
Não deve ser possivel criar um novo registro para um endereço não cadastrado.
A fatura de endereço deve ser criada como status de não pago por padrão.
