import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subtitle?: string;
  buttons: PromptButton[];
  prompType: 'plain-text' | 'secure-text';
  placeHolder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  buttons,
  prompType,
  title,
  placeHolder,
  subtitle,
  defaultValue,
}: Options) => {
  prompt(title, subtitle, buttons, {
    type: prompType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeHolder,
  });
};
