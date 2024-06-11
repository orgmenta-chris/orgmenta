/* eslint-disable react/no-unstable-nested-components,react-native/no-inline-styles*/
/**
 * Rich Editor Example
 * @deprecated Please refer to example.hooks.js
 * @author wxik
 * @since 2019-06-24 14:52
 */
import React, {
  FC,
  RefObject,
  useImperativeHandle,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  createRef,
} from "react";

import {
  Dimensions,
  TouchableOpacity,
  Appearance,
  Button,
  ColorSchemeName,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  actions,
  FONT_SIZE,
  getContentCSS,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
import Modal from "react-native";
import { ViewContainerScroll, ViewContainerStatic } from "./container";
import Markdown, { getUniqueID } from "react-native-markdown-renderer";
import { ViewButtonPressable } from "./button";
import { ViewTypographyText } from "./typography";
import { instanceSupabaseClient } from "./supabase";
import { pickImageAsync } from "./imagepicker";
import * as ImagePicker from "expo-image-picker";

export type IconRecord = {
  selected: boolean;
  disabled: boolean;
  tintColor: any;
  iconSize: number;
};

interface IProps {
  navigation: INavigation;
  theme?: ColorSchemeName;
}

export interface INavigation {
  push: (key: any, params?: Record<string, any>) => void;
}

export interface RefLinkModal {
  setModalVisible: (visile: boolean) => void;
}
const imageList = [
  "https://img.lesmao.vip/k/h256/R/MeiTu/1293.jpg",
  "https://pbs.twimg.com/profile_images/1242293847918391296/6uUsvfJZ.png",
  "https://img.lesmao.vip/k/h256/R/MeiTu/1297.jpg",
  "https://img.lesmao.vip/k/h256/R/MeiTu/1292.jpg",
];
const initHTML = `<br/>
<center><b onclick="_.sendEvent('TitleClick')" id="title" contenteditable="false">Rich Editor</b></center>
<center>
<a href="https://github.com/wxik/react-native-rich-editor">React Native</a>
<span>And</span>
<a href="https://github.com/wxik/flutter-rich-editor">Flutter</a>
</center>
<br/>
<div><center><img src="${imageList[0]}" onclick="_.sendEvent('ImgClick')" contenteditable="false" height="170px"/></center></div>
<pre type="javascript"><code>const editor = ReactNative;</code><code>console.log(editor);</code></pre>
<br/>Click the picture to switch<br/><br/>
`;

const phizIcon = require("../assets/color.png");
const htmlIcon = require("../assets/color.png");

function createContentStyle(theme: ColorSchemeName) {
  // Can be selected for more situations (cssText or contentCSSText).
  const contentStyle = {
    backgroundColor: "#2e3847",
    color: "#fff",
    caretColor: "red", // initial valid// initial valid
    placeholderColor: "gray",
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: "font-size: 16px; min-height: 200px;", // initial valid
  };
  if (theme === "light") {
    contentStyle.backgroundColor = "#fff";
    contentStyle.color = "#000033";
    contentStyle.placeholderColor = "#a9a9a9";
  }
  return contentStyle;
}

export function Example(props: any) {
  const { theme: initTheme = Appearance.getColorScheme(), navigation } = props;
  const richText = useRef<RichEditor>(null);
  const linkModal = useRef<RefLinkModal>();
  const scrollRef = useRef<ScrollView>(null);
  // save on html
  const contentRef = useRef(initHTML);

  const [theme, setTheme] = useState(initTheme);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [disabled, setDisable] = useState(false);
  const contentStyle = useMemo(() => createContentStyle(theme), [theme]);

  // on save to preview
  const handleSave = useCallback(() => {
    navigation.push("preview", {
      html: contentRef.current,
      css: getContentCSS(),
    });
  }, [navigation]);

  const handleHome = useCallback(() => {
    navigation.push("index");
  }, [navigation]);

  // editor change data
  const handleChange = useCallback((html: string) => {
    // save html to content ref;
    contentRef.current = html;
  }, []);

  // theme change to editor color
  const themeChange = useCallback(
    ({ colorScheme }: Appearance.AppearancePreferences) => {
      setTheme(colorScheme);
    },
    []
  );

  const onTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  const onDisabled = useCallback(() => {
    setDisable(!disabled);
  }, [disabled]);

  const editorInitializedCallback = useCallback(() => {
    // richText.current.registerToolbar(function (items) {
    // console.log('Toolbar click, selected items (insert end callback):', items);
    // });
  }, []);

  const onKeyHide = useCallback(() => {}, []);

  const onKeyShow = useCallback(() => {
    TextInput.State.currentlyFocusedInput() && setEmojiVisible(false);
  }, []);

  // editor height change
  const handleHeightChange = useCallback((height: number) => {
    console.log("editor height change:", height);
  }, []);

  const handleInsertEmoji = useCallback((emoji: string) => {
    richText.current?.insertText(emoji);
    richText.current?.blurContentEditor();
  }, []);

  const handleEmoji = useCallback(() => {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    setEmojiVisible(!emojiVisible);
  }, [emojiVisible]);

  const handleInsertVideo = useCallback(() => {
    richText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",
      "width: 50%;"
    );
  }, []);

  const handleInsertHTML = useCallback(() => {
    // this.richText.current?.insertHTML(
    //     `<span onclick="alert(2)" style="color: blue; padding:0 10px;" contenteditable="false">HTML</span>`,
    // );
    richText.current?.insertHTML(
      `<div style="padding:10px 0;" contentEditable="false">
                <iframe  width="100%" height="220"  src="https://www.youtube.com/embed/6FrNXgXlCGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`
    );
  }, []);

  const onPressAddImage = useCallback(() => {
    // insert URL
    richText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png",
      "background: gray;"
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }, []);

  const onInsertLink = useCallback(() => {
    // this.richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }, []);

  const onLinkDone = useCallback(
    ({ title, url }: { title?: string; url?: string }) => {
      if (title && url) {
        richText.current?.insertLink(title, url);
      }
    },
    []
  );

  const handleFontSize = useCallback(() => {
    // 1=  10px, 2 = 13px, 3 = 16px, 4 = 18px, 5 = 24px, 6 = 32px, 7 = 48px;
    let size = [1, 2, 3, 4, 5, 6, 7];
    richText.current?.setFontSize(12 as FONT_SIZE);
  }, []);

  const handleForeColor = useCallback(() => {
    richText.current?.setForeColor("blue");
  }, []);

  const handleHaliteColor = useCallback(() => {
    richText.current?.setHiliteColor("red");
  }, []);

  const handlePaste = useCallback((data: any) => {
    console.log("Paste:", data);
  }, []);

  // @deprecated Android keyCode 229
  const handleKeyUp = useCallback(() => {
    // console.log('KeyUp:', data);
  }, []);

  // @deprecated Android keyCode 229
  const handleKeyDown = useCallback(() => {
    // console.log('KeyDown:', data);
  }, []);

  const handleInput = useCallback(() => {
    // console.log(inputType, data)
  }, []);

  const handleMessage = useCallback(
    ({ type, id, data }: { type: string; id: string; data?: any }) => {
      switch (type) {
        case "ImgClick":
          richText.current?.commandDOM(
            `$('#${id}').src="${imageList[Math.random()]}"`
          );
          break;
        case "TitleClick":
          const color = ["red", "blue", "gray", "yellow", "coral"];

          // command: $ = document.querySelector
          richText.current?.commandDOM(
            `$('#${id}').style.color='${color[Math.random()]}'`
          );
          break;
        case "SwitchImage":
          break;
      }
      console.log("onMessage", type, id, data);
    },
    []
  );

  const handleFocus = useCallback(() => {
    console.log("editor focus");
  }, []);

  const handleBlur = useCallback(() => {
    console.log("editor blur");
  }, []);

  const handleCursorPosition = useCallback((scrollY: number) => {
    // Positioning scroll bar
    scrollRef.current!.scrollTo({ y: scrollY - 30, animated: true });
  }, []);

  useEffect(() => {
    let listener = [
      Appearance.addChangeListener(themeChange),
      Keyboard.addListener("keyboardDidShow", onKeyShow),
      Keyboard.addListener("keyboardDidHide", onKeyHide),
    ];
    return () => {
      listener.forEach((it) => it.remove());
    };
  }, [onKeyHide, onKeyShow, themeChange]);

  const { backgroundColor, color, placeholderColor } = contentStyle;
  const dark = theme === "dark";

  return (
    <SafeAreaView style={[styles.container, dark && styles.darkBack]}>
      <StatusBar barStyle={!dark ? "dark-content" : "light-content"} />
      <InsertLinkModal
        placeholderColor={placeholderColor}
        color={color}
        backgroundColor={backgroundColor}
        onDone={onLinkDone}
        forwardRef={linkModal}
      />
      <View style={styles.nav}>
        <Button title={"HOME"} onPress={handleHome} />
        <Button title="Preview" onPress={handleSave} />
      </View>
      <ScrollView
        style={[styles.scroll, dark && styles.scrollDark]}
        keyboardDismissMode={"none"}
        ref={scrollRef}
        nestedScrollEnabled={true}
        scrollEventThrottle={20}
      >
        <View style={[styles.topVi, dark && styles.darkBack]}>
          <View style={styles.item}>
            <Text style={{ color }}>To: </Text>
            <TextInput
              autoCorrect={false}
              style={[styles.input, { color }]}
              placeholderTextColor={placeholderColor}
              placeholder={"stulip@126.com"}
            />
          </View>
          <View style={styles.item}>
            <Text style={{ color }}>Subject: </Text>
            <TextInput
              autoCorrect={false}
              style={[styles.input, { color }]}
              placeholderTextColor={placeholderColor}
              placeholder="Rich Editor Bug 😀"
            />
          </View>
          <View style={styles.item}>
            <Button title={String(theme)} onPress={onTheme} />
            <Button
              title={disabled ? "enable" : "disable"}
              onPress={onDisabled}
            />
          </View>
        </View>
        <RichToolbar
          style={[styles.richBar, dark && styles.richBarDark]}
          flatContainerStyle={styles.flatStyle}
          editor={richText}
          disabled={disabled}
          selectedIconTint={"#2095F2"}
          disabledIconTint={"#bfbfbf"}
          onPressAddImage={onPressAddImage}
          onInsertLink={onInsertLink}
        />
        <RichEditor
          // initialFocus={true}
          initialFocus={false}
          firstFocusEnd={false}
          disabled={disabled}
          editorStyle={contentStyle} // default light style
          ref={richText}
          style={styles.rich}
          useContainer={true}
          initialHeight={400}
          enterKeyHint={"done"}
          // containerStyle={{borderRadius: 24}}
          placeholder={"please input content"}
          initialContentHTML={initHTML}
          editorInitializedCallback={editorInitializedCallback}
          onChange={handleChange}
          onHeightChange={handleHeightChange}
          onPaste={handlePaste}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onMessage={handleMessage}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCursorPosition={handleCursorPosition}
          pasteAsPlainText={true}
        />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <RichToolbar
          style={[styles.richBar, dark && styles.richBarDark]}
          flatContainerStyle={styles.flatStyle}
          editor={richText}
          disabled={disabled}
          // iconTint={color}
          selectedIconTint={"#2095F2"}
          disabledIconTint={"#bfbfbf"}
          onPressAddImage={onPressAddImage}
          onInsertLink={onInsertLink}
          // iconSize={24}
          // iconGap={10}
          actions={[
            actions.undo,
            actions.redo,
            actions.insertVideo,
            actions.insertImage,
            actions.setStrikethrough,
            // actions.checkboxList,
            actions.insertOrderedList,
            actions.blockquote,
            actions.alignLeft,
            actions.alignCenter,
            actions.alignRight,
            actions.code,
            actions.line,

            actions.foreColor,
            actions.hiliteColor,
            actions.heading1,
            actions.heading4,
            "insertEmoji",
            "insertHTML",
            "fontSize",
          ]} // default defaultActions
          iconMap={{
            insertEmoji: phizIcon,
            [actions.foreColor]: () => (
              <Text style={[styles.tib, { color: "blue" }]}>FC</Text>
            ),
            [actions.hiliteColor]: ({ tintColor }: IconRecord) => (
              <Text
                style={[
                  styles.tib,
                  { color: tintColor, backgroundColor: "red" },
                ]}
              >
                BC
              </Text>
            ),
            [actions.heading1]: ({ tintColor }: IconRecord) => (
              <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
            ),
            [actions.heading4]: ({ tintColor }: IconRecord) => (
              <Text style={[styles.tib, { color: tintColor }]}>H4</Text>
            ),
            insertHTML: htmlIcon,
          }}
          insertEmoji={handleEmoji}
          insertHTML={handleInsertHTML}
          insertVideo={handleInsertVideo}
          fontSize={handleFontSize}
          foreColor={handleForeColor}
          hiliteColor={handleHaliteColor}
        />
        {emojiVisible && <EmojiView onSelect={handleInsertEmoji} />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#eaeaea",
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: "white",
  },
  view: {
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: Math.min(Dimensions.get("window").width, 32 * 12),
  },
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e3e3e3",
  },
  topVi: {
    backgroundColor: "#fafafa",
  },
  richBar: {
    borderColor: "#efefef",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  richBarDark: {
    backgroundColor: "#191d20",
    borderColor: "#696969",
  },
  scroll: {
    backgroundColor: "#ffffff",
  },
  scrollDark: {
    backgroundColor: "#2e3847",
  },
  darkBack: {
    backgroundColor: "#191d20",
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e8e8e8",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    height: 150,
  },

  tib: {
    textAlign: "center",
    color: "#515156",
  },

  flatStyle: {
    paddingHorizontal: 12,
  },

  linkTitle: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#b3b3b3",
  },
  dialog: {
    borderRadius: 8,
    marginHorizontal: 40,
    paddingHorizontal: 10,
  },

  buttonView: {
    flexDirection: "row",
    height: 36,
    paddingVertical: 4,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#286ab2",
  },
});

interface EmojiProps {
  onSelect: (value: string) => void;
}

export function EmojiView(props: EmojiProps) {
  const { onSelect } = props;
  return (
    <View style={styles.view}>
      <Text style={styles.item} onPress={() => onSelect("😃")}>
        😃
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😄")}>
        😄
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😁")}>
        😁
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😆")}>
        😆
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😅")}>
        😅
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😂")}>
        😂
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤣")}>
        🤣
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😊")}>
        😊
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😇")}>
        😇
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🙂")}>
        🙂
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🙃")}>
        🙃
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😉")}>
        😉
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😌")}>
        😌
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😍")}>
        😍
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🥰")}>
        🥰
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😘")}>
        😘
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😗")}>
        😗
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😙")}>
        😙
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😚")}>
        😚
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😋")}>
        😋
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😛")}>
        😛
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😝")}>
        😝
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😜")}>
        😜
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤪")}>
        🤪
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤨")}>
        🤨
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🧐")}>
        🧐
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤓")}>
        🤓
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😎")}>
        😎
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤩")}>
        🤩
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🥳")}>
        🥳
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😏")}>
        😏
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😒")}>
        😒
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😞")}>
        😞
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😔")}>
        😔
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😟")}>
        😟
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😕")}>
        😕
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🙁")}>
        🙁
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😣")}>
        😣
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😖")}>
        😖
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😫")}>
        😫
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😩")}>
        😩
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🥺")}>
        🥺
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😢")}>
        😢
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😭")}>
        😭
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😤")}>
        😤
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😠")}>
        😠
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😡")}>
        😡
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤬")}>
        🤬
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤯")}>
        🤯
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😳")}>
        😳
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🥵")}>
        🥵
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🥶")}>
        🥶
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😱")}>
        😱
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😨")}>
        😨
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😰")}>
        😰
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😥")}>
        😥
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😓")}>
        😓
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤗")}>
        🤗
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤔")}>
        🤔
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤭")}>
        🤭
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤫")}>
        🤫
      </Text>
      <Text style={styles.item} onPress={() => onSelect("🤥")}>
        🤥
      </Text>
      <Text style={styles.item} onPress={() => onSelect("😶")}>
        😶
      </Text>
    </View>
  );
}

interface LinkModalProps {
  color: string;
  placeholderColor: string;
  backgroundColor: string;
  onDone: (param: { title?: string; url?: string }) => void;
  forwardRef: RefObject<any>;
}

export const InsertLinkModal: FC<LinkModalProps> = ({
  color,
  placeholderColor,
  backgroundColor,
  onDone,
  forwardRef,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const dataRef = useRef<{ title?: string; url?: string }>({});

  const setTitle = (title: string) => {
    dataRef.current.title = title;
  };

  const setURL = (url: string) => {
    dataRef.current.url = url;
  };

  const handleDone = () => {
    setModalVisible(false);
    onDone(dataRef.current);
  };

  useImperativeHandle(
    forwardRef,
    () => {
      return {
        setModalVisible,
      };
    },
    []
  );

  return (
    <ViewContainerStatic>
      {/* // animationIn={'fadeIn'}
      // animationOut={'fadeOut'}
      // coverScreen={false}
      // isVisible={isModalVisible}
      // backdropColor={color}
      // backdropOpacity={0.3}
      // onBackdropPress={() => setModalVisible(false)}> */}
      <View style={[styles.dialog, { backgroundColor }]}>
        <View style={styles.linkTitle}>
          <Text style={{ color }}>Insert Link</Text>
        </View>
        <View style={styles.item}>
          <TextInput
            style={[styles.input, { color }]}
            placeholderTextColor={placeholderColor}
            placeholder={"title"}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            style={[styles.input, { color }]}
            placeholderTextColor={placeholderColor}
            placeholder="http(s)://"
            onChangeText={(text) => setURL(text)}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleDone}>
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewContainerStatic>
  );
};

export const handleHead = ({ tintColor }: any) => (
  <Text style={{ color: tintColor }}>H1</Text>
);

export const ViewNewRichText = () => {
  const _editor = createRef();

  const customHandler = async (name: string, value: any) => {
    if (name === "image") {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        console.log({ result });
        // @ts-ignore
        _editor.current?.insertEmbed(
          // @ts-ignore
          _editor.current?.getLength(),
          "image",
          result.assets[0].uri
        );
      } else {
        alert("You did not select any image.");
      }
    }
  };

  const saveToSupabase = async () => {
    if (_editor && _editor.current) {
      const title = "This is a test title";
      const status = "New";
      const type = "Document";

      // @ts-ignore
      const descriptionPromise = _editor.current?.getContents();
      const description = await descriptionPromise;

      console.log({ title, status, type, description });

      // const { data, error } = await instanceSupabaseClient
      //   .from("entities_orgmenta")
      //   .insert([{ title, status, type, description }])
      //   .select();

      // if (error) throw error;

      // if (data) console.log(data);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      {
        // @ts-ignore
        <StatusBar style="auto" />
      }
      {
        <QuillEditor
          // autoSize
          style={styles.editor}
          // @ts-ignore
          ref={_editor}
          initialHtml="<h1>Quill Editor for react-native</h1>"
        />
      }
      {
        <QuillToolbar
          // @ts-ignore
          editor={_editor}
          custom={{
            handler: customHandler,
            actions: ["image"],
          }}
          options="full"
          theme="light"
        />
      }

      <ViewButtonPressable
        style={{
          flex: 1,
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
          backgroundColor: "lightblue",
        }}
        onPress={saveToSupabase}
      >
        <ViewTypographyText
          selectable={false}
          style={{ fontWeight: "bold", textAlign: "center", paddingBottom: 10 }}
        >
          Save To Supabase
        </ViewTypographyText>
      </ViewButtonPressable>
    </SafeAreaView>
  );
};
