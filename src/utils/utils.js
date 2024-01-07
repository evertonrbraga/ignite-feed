import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export const publishedDateFormatted = (publishedAt) => {
  return format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", { locale: ptBR });
};

export const publishedDateRelativeToNow = (publishedAt) => {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
};
