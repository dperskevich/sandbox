import React, {
  Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { withTranslation } from 'react-i18next';
import { AppError } from '@/widgets/app-error/ui/app-error';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErorrBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErorrBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): ErorrBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // we need to use Suspence for i18n to work
      return (
        <Suspense fallback="">
          <AppError />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
