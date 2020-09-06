import React from "react";

import { Heading, Stack, Text } from "@chakra-ui/core";

import Layout from "../../components/Shared/layout";

const TermsPage = () => (
  <Layout
    backgroundImage="url(/media/paw-print-background.jpg)"
    backgroundSize="cover"
  >
    <Stack alignItems="center" spacing={10}>
      <Heading color="petcode.blue.400" marginTop={10}>
        Terms and Conditions
      </Heading>
      <Text
        width="80%"
        fontSize="xl"
        color="petcode.neutral.600"
        whiteSpace="pre-line"
      >
        Lorem ipsum dolor sit amet, cu diam dicat vix, ad integre intellegam
        neglegentur vis. Ea eripuit constituam nam, ut enim posse apeirian sea.
        Quo commune honestatis in, has in dicta inermis luptatum. An eam feugait
        perfecto, nobis menandri prodesset vix in. At graecis convenire pri, id
        est audire molestiae. Dicunt mnesarchum vis ex, pro ut debitis suscipit
        invenire, mel an debet expetendis. Vel ne utroque fuisset iudicabit,
        vidit menandri ei sit.
        {"\n"}
        {"\n"}
        No soluta percipitur eos, vis cu omnis diceret forensibus, ex sed agam
        laudem interpretaris. Labitur suavitate ea est, vide dicit
        conclusionemque ei quo, ullum nulla pri at. Est illum persecuti an, mel
        atqui animal in. Oratio nostrum at sed, ea vim dico conceptam
        adipiscing. Quo id habeo adversarium, vim no tollit maiorum appetere.
        {"\n"}
        {"\n"}
        Facer percipit apeirian in quo, vide elit laudem te sea. Nec delenit
        scribentur in, te rebum dicat menandri per. Sea inermis invidunt at, cu
        sit purto tota. Sit impedit consectetuer no, sit lorem denique cu, an
        qui labitur theophrastus.
      </Text>
    </Stack>
  </Layout>
);

export default TermsPage;
