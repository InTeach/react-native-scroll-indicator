import React from "react";
import { Text, View } from "react-native";
import ScrollIndicator from "@inteach/react-native-scroll-indicator";

export default class App extends React.Component {
  render() {
    return (
      <ScrollIndicator>
        <View style={{ padding: 20 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            porta quam. Praesent sit amet iaculis arcu. Fusce nisl tellus,
            elementum vitae aliquam eget, pharetra in enim. Morbi facilisis,
            purus ac placerat pretium, neque odio ultricies turpis, sit amet
            placerat velit erat eu nunc. Curabitur vitae lectus felis. Quisque
            sed fringilla tellus. Suspendisse molestie metus tincidunt dolor
            convallis posuere. Nam ultricies id metus ut vestibulum. In quis
            metus non ligula posuere tincidunt vehicula vitae odio. Morbi tempus
            vel ex sed commodo. Vestibulum sapien quam, dapibus nec metus quis,
            laoreet ornare mauris.
          </Text>
          <Text>
            Donec efficitur, ex ac blandit pharetra, lorem nisl efficitur risus,
            id eleifend felis sem nec mauris. Pellentesque eros lectus, egestas
            ut porttitor non, auctor vitae nunc. Ut ut neque eu ipsum varius
            elementum. Mauris ut eros porttitor ex aliquam ornare in vitae
            lacus. Mauris vel risus non turpis suscipit interdum ut at neque.
            Etiam luctus eros eget imperdiet cursus. Nullam accumsan auctor nisi
            ac euismod. Fusce tempus dignissim lacus sed tincidunt. Proin
            sodales condimentum nulla sit amet malesuada. Ut vel suscipit
            sapien. Praesent eget lobortis ligula, id ultricies nulla.
            Suspendisse potenti. Fusce commodo gravida tristique.
          </Text>
          <Text>
            Phasellus euismod id nisl vitae consequat. Integer maximus id neque
            ut eleifend. Duis sed erat commodo, dignissim justo dignissim,
            vulputate urna. Donec erat leo, aliquet a sem eget, lobortis
            facilisis eros. Vivamus aliquam lacinia vehicula. Duis porta
            vehicula erat, quis blandit libero lobortis ut. Praesent ante erat,
            finibus sit amet accumsan ut, sodales ac sapien. Vestibulum semper,
            metus in euismod tristique, augue arcu mattis lectus, sed mollis
            nunc sapien vel nulla. Vivamus molestie, augue eget efficitur
            euismod, velit mauris sodales lectus, accumsan volutpat nulla nibh
            ac erat. Nulla iaculis purus quis tempus commodo.
          </Text>
          <Text>
            Vivamus egestas augue non nibh varius fringilla. Cras in mattis
            quam, id volutpat mi. Pellentesque quis sapien dignissim, malesuada
            ex id, porttitor velit. Phasellus mauris enim, porta at risus ac,
            scelerisque hendrerit sem. Phasellus eget elementum nisl. Quisque a
            felis quis ligula imperdiet laoreet et a nulla. Sed rutrum rhoncus
            sollicitudin. Vestibulum bibendum mauris neque, ut laoreet diam
            imperdiet posuere. Maecenas quam magna, tempus eu urna ut, tristique
            finibus odio. Mauris id justo odio. Nullam pharetra ante at nisl
            ultrices, quis pellentesque enim porta. Duis maximus dui erat,
            tincidunt vehicula risus tempus eu. Aenean eu lorem sed ante maximus
            cursus nec vel orci. Suspendisse interdum sed est eu congue.
          </Text>
          <Text>
            Praesent eget dignissim felis. Maecenas tortor erat, ultricies eget
            ipsum id, rutrum tincidunt metus. Nulla dapibus libero est, a
            egestas felis egestas in. In suscipit dolor consequat risus interdum
            congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit neque quis pulvinar sodales. Morbi placerat
            tincidunt gravida.
          </Text>
        </View>
      </ScrollIndicator>
    );
  }
}
