export const hasBody = body => body &&
  body.props &&
  body.props.dangerouslySetInnerHTML &&
  body.props.dangerouslySetInnerHTML.__html !== '';
