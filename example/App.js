import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollIndicator from "react-native-scroll-indicator";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <ScrollIndicator>
          <View style={{ flex: 1, padding: 20 }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nec odio eu tellus volutpat porttitor. Sed volutpat
              arcu eu lacinia molestie. Suspendisse molestie ipsum mauris, ac
              bibendum lectus sodales ac. In posuere nibh ut nibh dignissim,
              quis lobortis diam tempor. Sed vehicula, justo nec bibendum
              posuere, turpis eros egestas est, a tempor leo mauris condimentum
              odio. Phasellus consequat et felis non ornare. Proin nibh mi,
              viverra in neque nec, bibendum pulvinar augue. Nulla facilisi.
              Nunc sodales ac eros nec porttitor. Aliquam maximus nulla ac nulla
              faucibus ullamcorper. Nunc non gravida neque.
            </Text>
            <Text>
              Donec sit amet fermentum sem, ac sagittis magna. Praesent et
              lacinia nibh. Vestibulum tristique odio ut massa semper vulputate.
              Nullam pharetra leo vitae nibh pretium, in vehicula nisl congue.
              Etiam aliquam ipsum velit, eu consectetur nisi dapibus id. Sed
              consectetur mi sit amet mauris hendrerit tincidunt. Maecenas
              ullamcorper tempus neque id varius. Sed eget ullamcorper urna.
              Morbi ut porta neque. Ut ac faucibus mi. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Cras ultrices cursus est sit amet lobortis. Aenean vulputate nisi
              non feugiat suscipit. Suspendisse id rhoncus sem, vel congue
              ipsum. In iaculis turpis vel ultricies pellentesque. Maecenas
              vulputate maximus augue, et interdum tortor gravida sit amet.
            </Text>
            <Text>
              Mauris commodo felis aliquet urna ultricies, et fringilla urna
              auctor. Phasellus tortor velit, blandit vel turpis in, vehicula
              convallis turpis. Curabitur enim augue, tincidunt sit amet magna
              nec, sagittis accumsan sem. Sed malesuada congue urna et maximus.
              Vestibulum blandit, erat sed suscipit fringilla, lorem mi
              imperdiet purus, vel bibendum elit mi ut leo. Praesent vehicula
              urna quam, ut iaculis magna luctus non. Nam porta mi nec tellus
              scelerisque viverra.
            </Text>
            <Text>
              Duis eu sapien eu tellus tempus sollicitudin. Mauris rhoncus, nibh
              id dignissim egestas, elit nisi sollicitudin diam, et fringilla
              tortor sapien ut leo. Vestibulum non ex in eros convallis
              consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce dapibus, justo ut accumsan interdum, ante felis
              lacinia nisl, eu fermentum tortor libero sit amet urna. Proin
              consequat rutrum diam, eu ullamcorper erat commodo ut. Sed
              fringilla ligula et tincidunt convallis.
            </Text>
            <Text>
              Nullam nec velit vel lectus mollis vestibulum. Donec sed magna in
              risus molestie auctor. Donec felis purus, feugiat id sodales eget,
              fermentum in ex. Aenean fringilla lorem ligula, et tempor neque
              volutpat eu. Suspendisse vel dignissim nibh. In pharetra at velit
              quis laoreet. Integer ut enim viverra, luctus turpis eget, auctor
              urna. Suspendisse dictum diam non metus porttitor, eget hendrerit
              quam rhoncus. Phasellus congue varius semper. Maecenas sed erat
              orci. Nullam nisi metus, ornare et velit nec, viverra volutpat
              purus. Nulla blandit odio non leo dignissim interdum. Sed nec
              gravida est, a laoreet velit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Ut sagittis est posuere ex aliquet, at
              dignissim purus commodo.
            </Text>
          </View>
        </ScrollIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
