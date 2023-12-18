import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Catalogueitem from "../components/Catalogueitem";

function Collection({ catalogues }) {
  return (
    <div>
      <SimpleGrid columns={6} spacing={0}>
        {catalogues.map((catalogue) => (
          <Catalogueitem key={catalogue.id} {...catalogue} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Collection;
