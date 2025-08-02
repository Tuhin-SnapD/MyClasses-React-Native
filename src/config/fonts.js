import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { WorkSans_400Regular } from "@expo-google-fonts/work-sans";

export const useAppFonts = () => {
  return useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    WorkSans_400Regular,
  });
};

export const FONTS = {
  JOSEFIN_REGULAR: 'JosefinSans_400Regular',
  JOSEFIN_MEDIUM: 'JosefinSans_500Medium',
  NUNITO_SEMIBOLD: 'Nunito_600SemiBold',
  NUNITO_BOLD: 'Nunito_700Bold',
  WORK_SANS_REGULAR: 'WorkSans_400Regular',
}; 