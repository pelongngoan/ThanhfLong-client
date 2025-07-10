import { render, screen, fireEvent } from "@testing-library/react";
import { TextField } from "../TextField";

describe("TextField Component", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockRegister = jest.fn() as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders input field with correct attributes", () => {
    render(
      <TextField
        name="email"
        type="email"
        placeholder="Enter your email"
        register={mockRegister}
      />
    );

    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("id", "email");
  });

  test("applies correct CSS classes for styling", () => {
    render(
      <TextField
        name="username"
        type="text"
        placeholder="Username"
        register={mockRegister}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass(
      "w-full",
      "border-2",
      "border-gray-300",
      "rounded-md",
      "p-2",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-blue-500"
    );
  });

  test("calls register function with correct parameters", () => {
    const validation = { required: true, minLength: 3 };

    render(
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        register={mockRegister}
        validation={validation}
      />
    );

    expect(mockRegister).toHaveBeenCalledWith("password", validation);
  });

  test("handles onChange event when provided", () => {
    const handleChange = jest.fn();

    render(
      <TextField
        name="testField"
        type="text"
        placeholder="Test input"
        register={mockRegister}
        onChange={handleChange}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalled();
  });

  test("renders different input types correctly", () => {
    const { rerender } = render(
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        register={mockRegister}
      />
    );

    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        register={mockRegister}
      />
    );

    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
