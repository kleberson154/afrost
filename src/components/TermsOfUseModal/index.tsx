import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type TermsOfUseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const TermsOfUseModal = ({ isOpen, onClose }: TermsOfUseModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent
        color="black"
        maxH={{ base: "100%", sm: "calc(100% - 7.5rem)" }}
        borderRadius={{ base: "0", sm: "6px" }}
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody
          sx={{
            "&::-webkit-scrollbar": { width: "5px" },
            "&::-webkit-scrollbar-thumb": {
              bgGradient: "linear(green.600, green.300)",
              borderRadius: "full",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#ccc",
              borderRadius: "full",
            },
            p: {
              mb: 4,
            },
            "h2, h3": {
              pb: 5,
              fontWeight: 500,
            },
            "ul, ol": {
              pl: 10,
              mb: 4,
            },
            li: {
              listStyle: "initial",
            },
          }}
        >
          <Heading as="h2" mb={4} fontSize="2xl">
            1. Termos
          </Heading>
          <Text>
            Ao acessar ao site{" "}
            <a href="https://afrost.com.br">Afrost Parceiros</a>, concorda em
            cumprir estes termos de serviço, todas as leis e regulamentos
            aplicáveis e concorda que é responsável pelo cumprimento de todas as
            leis locais aplicáveis. Se você não concordar com algum desses
            termos, está proibido de usar ou acessar este site. Os materiais
            contidos neste site são protegidos pelas leis de direitos autorais e
            marcas comerciais aplicáveis.
          </Text>
          <Heading as="h2" my={4} fontSize="2xl">
            2. Uso de Licença
          </Heading>
          <Text>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Afrost Parceiros ,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:{" "}
          </Text>
          <ol>
            <li>modificar ou copiar os materiais; </li>
            <li>
              usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial);{" "}
            </li>
            <li>
              tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site Afrost Parceiros;{" "}
            </li>
            <li>
              remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou{" "}
            </li>
            <li>
              transferir os materiais para outra pessoa ou 'espelhe' os
              materiais em qualquer outro servidor.
            </li>
          </ol>
          <Text>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Afrost Parceiros a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrónico ou impresso.
          </Text>
          <Heading as="h2" my={4} fontSize="2xl">
            3. Isenção de responsabilidade
          </Heading>
          <ol>
            <li>
              Os materiais no site da Afrost Parceiros são fornecidos 'como
              estão'. Afrost Parceiros não oferece garantias, expressas ou
              implícitas, e, por este meio, isenta e nega todas as outras
              garantias, incluindo, sem limitação, garantias implícitas ou
              condições de comercialização, adequação a um fim específico ou não
              violação de propriedade intelectual ou outra violação de direitos.{" "}
            </li>
            <li>
              Além disso, o Afrost Parceiros não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ou à
              confiabilidade do uso dos materiais em seu site ou de outra forma
              relacionado a esses materiais ou em sites vinculados a este site.
            </li>
          </ol>
          <Heading as="h2" my={4} fontSize="2xl">
            4. Limitações
          </Heading>
          <Text>
            Em nenhum caso o Afrost Parceiros ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em Afrost
            Parceiros, mesmo que Afrost Parceiros ou um representante autorizado
            da Afrost Parceiros tenha sido notificado oralmente ou por escrito
            da possibilidade de tais danos. Como algumas jurisdições não
            permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </Text>
          <Heading as="h2" my={4} fontSize="2xl">
            5. Precisão dos materiais
          </Heading>
          <Text>
            Os materiais exibidos no site da Afrost Parceiros podem incluir
            erros técnicos, tipográficos ou fotográficos. Afrost Parceiros não
            garante que qualquer material em seu site seja preciso, completo ou
            atual. Afrost Parceiros pode fazer alterações nos materiais contidos
            em seu site a qualquer momento, sem aviso prévio. No entanto, Afrost
            Parceiros não se compromete a atualizar os materiais.
          </Text>
          <Heading as="h2" my={4} fontSize="2xl">
            6. Links
          </Heading>
          <Text>
            O Afrost Parceiros não analisou todos os sites vinculados ao seu
            site e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosso por Afrost Parceiros
            do site. O uso de qualquer site vinculado é por conta e risco do
            usuário.
          </Text>
          <Heading my={2} as="h3" fontSize="xl">
            Modificações
          </Heading>
          <Text>
            O Afrost Parceiros pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </Text>
          <Heading my={2} as="h3" fontSize="xl">
            Lei aplicável
          </Heading>
          <Text>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Afrost Parceiros e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
