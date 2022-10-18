import { Collapse, Grid, Text } from "@nextui-org/react";
import FuckYou from'../../assets/bead-5.jpg'
function CollapsItem() {
  return (
    <Grid.Container gap={1}>
      <Grid>
        <Collapse.Group splitted>
          <Collapse title="Design A">
            <img src={FuckYou} alt={FuckYou} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Design B">
            <img src={FuckYou} alt={FuckYou} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Design C">
            <img src={FuckYou} alt={FuckYou} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
export default CollapsItem;
